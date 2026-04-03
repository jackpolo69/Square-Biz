/**
 * Cloudflare Worker - Resend Email Proxy for Square-Biz
 */

export default {
    async fetch(request, env) {
        if (request.method === "OPTIONS") {
            return new Response(null, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "POST, OPTIONS",
                    "Access-Control-Allow-Headers": "Content-Type",
                },
            });
        }

        const url = new URL(request.url);

        if (url.pathname === "/contact" && request.method === "POST") {
            try {
                const { name, email, message } = await request.json();

                if (!email) {
                    return jsonResponse({ error: "Email required" }, 400);
                }

                if (!env.RESEND_API_KEY) {
                    return jsonResponse({ error: "Server configuration error" }, 500);
                }

                // Sync to Resend Audience
                if (env.RESEND_AUDIENCE_ID) {
                    await syncToResendAudience(env, email, name, { form_type: 'square-biz-contact' });
                }

                // Send notification email
                await fetch("https://api.resend.com/emails", {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${env.RESEND_API_KEY}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        from: "Square-Biz <system@mail.mach-media.net>",
                        to: ["info@squarebiz.ai"],
                        subject: `New Inquiry: ${name}`,
                        html: `
              <h2>New Message from Square-Biz</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Message:</strong></p>
              <blockquote style="background: #f5f5f5; padding: 15px; border-left: 4px solid #7000FF;">
                ${message}
              </blockquote>
            `,
                    }),
                });

                return jsonResponse({ success: true });
            } catch (error) {
                return jsonResponse({ error: error.message }, 500);
            }
        }

        return new Response("Not Found", { status: 404 });
    },
};

async function syncToResendAudience(env, email, name, metadata = {}) {
    try {
        await fetch(`https://api.resend.com/audiences/${env.RESEND_AUDIENCE_ID}/contacts`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${env.RESEND_API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                first_name: name?.split(" ")[0] || "",
                last_name: name?.split(" ").slice(1).join(" ") || "",
                unsubscribed: false,
            }),
        });
        return true;
    } catch (error) {
        return false;
    }
}

function jsonResponse(data, status = 200) {
    return new Response(JSON.stringify(data), {
        status,
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
    });
}
