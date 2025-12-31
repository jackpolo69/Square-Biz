import React, { useState, useRef, useEffect } from 'react'
import { Send, Bot, User } from 'lucide-react'
import Button from './Button'
import './ChatAssistant.css'

const ChatAssistant = () => {
    const [messages, setMessages] = useState([
        { id: 1, text: "Hello! I'm the Square Biz AI. How can I assist you with your business scaling needs today?", sender: 'bot' }
    ])
    const [inputText, setInputText] = useState('')
    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(scrollToBottom, [messages])

    const handleSend = () => {
        if (!inputText.trim()) return

        const userMsg = { id: Date.now(), text: inputText, sender: 'user' }
        setMessages(prev => [...prev, userMsg])
        setInputText('')

        // Simulate AI response
        setTimeout(() => {
            const botMsg = {
                id: Date.now() + 1,
                text: "Thank you for your inquiry. Our quantum systems are analyzing your request. A specialist will be in touch shortly to discuss tailored strategies.",
                sender: 'bot'
            }
            setMessages(prev => [...prev, botMsg])
        }, 1000)
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') handleSend()
    }

    return (
        <div className="chat-assistant">
            <div className="chat-header">
                <div className="chat-avatar">
                    <Bot size={24} />
                </div>
                <h3>Square Biz AI Assistant</h3>
            </div>

            <div className="chat-messages">
                {messages.map((msg) => (
                    <div key={msg.id} className={`message ${msg.sender}`}>
                        <div className="message-bubble">
                            {msg.text}
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            <div className="chat-input-area">
                <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your question..."
                />
                <button className="send-btn" onClick={handleSend}>
                    <Send size={20} />
                </button>
            </div>
        </div>
    )
}

export default ChatAssistant
