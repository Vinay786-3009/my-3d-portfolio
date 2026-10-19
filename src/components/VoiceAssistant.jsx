import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { Mic, MicOff, Volume2, VolumeX, X, Sparkles, Send, Bot, User, Radio } from 'lucide-react';

export default function VoiceAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: `Hello! I am Vinay's AI Portfolio Voice Assistant. Ask me about his machine learning projects, verified credentials, internships, or background!`
    }
  ]);

  const recognitionRef = useRef(null);
  const messagesEndRef = useRef(null);
  const handleQueryRef = useRef(null);

  const speakText = useCallback((text) => {
    if (!voiceEnabled || !window.speechSynthesis) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.05;
    utterance.pitch = 1.0;

    const voices = window.speechSynthesis.getVoices();
    const naturalVoice = voices.find(v => v.lang.includes('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha')));
    if (naturalVoice) utterance.voice = naturalVoice;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  }, [voiceEnabled]);

  const getAssistantAnswer = useCallback((query) => {
    const q = query.toLowerCase();

    if (q.includes('who is') || q.includes('about vinay') || q.includes('introduce') || q.includes('background') || q.includes('tell me about')) {
      return `${personalInfo.name} is a B.Tech Artificial Intelligence and Data Science student at Mother Theresa Institute of Engineering and Technology (JNTUA) with a 75% score. He is a passionate Full-Stack developer and Machine Learning engineer skilled in React, Python, Java, SQL, and Scikit-learn.`;
    }

    if (q.includes('project') || q.includes('traffic') || q.includes('smart campus') || q.includes('work') || q.includes('prediction')) {
      return `Vinay has engineered 5 core projects: the Traffic Accident Hotspot Analyzer with interactive spatial maps, the Student Academic Prediction System using Scikit-learn, the Smart Campus collegiate web portal in React, the Vinay E-Commerce storefront, and the Arduino Academic Traffic Light System.`;
    }

    if (q.includes('certificate') || q.includes('certification') || q.includes('eduskills') || q.includes('iks') || q.includes('hackerrank') || q.includes('hp')) {
      return `Vinay holds prestigious verified credentials including: the Government of India Ministry of Education and CSIR Merit Certificate in IKS-TKDL Intellectual Property with a 75%+ score, the HP LIFE Data Science and Analytics certification, HackerRank SQL Basic certification, Microsoft Simplilearn MS Excel, NPTEL Industrial IoT Elite distinction at 86%, and EduSkills Cohorts in AWS Data Engineering, AWS Generative AI, and Google Cloud AI-ML.`;
    }

    if (q.includes('internship') || q.includes('experience') || q.includes('codealpha') || q.includes('vaultsphere')) {
      return `Vinay has completed two internships: a Data Science and Machine Learning internship at CodeAlpha developing supervised predictive pipelines, and an AI and Software Development internship at VaultSphere AI Technologies.`;
    }

    if (q.includes('contact') || q.includes('email') || q.includes('hire') || q.includes('reach') || q.includes('phone') || q.includes('linkedin')) {
      return `You can contact Vinay directly via email at vinay76b@gmail.com, or connect on LinkedIn at bangalore-vinay. He is based in Palamaner, Andhra Pradesh, and is open to software engineering and AI/ML opportunities.`;
    }

    if (q.includes('skill') || q.includes('technology') || q.includes('stack') || q.includes('python') || q.includes('java') || q.includes('react')) {
      return `Vinay's core technical stack includes Java for Data Structures & Problem Solving on LeetCode, Python, Pandas, and Scikit-learn for Data Science & ML, React.js and Tailwind CSS for frontend web applications, plus MySQL, MongoDB, Firebase, and Git.`;
    }

    if (q.includes('resume') || q.includes('cv') || q.includes('download')) {
      return `Vinay's verified curriculum vitae is accessible directly from the resume banner on this page, or you can download it via the Resume PDF button in the navigation bar!`;
    }

    return `I understand you're asking about "${query}". Bangalore Vinay is a dedicated AI & Data Science student and Full-Stack Developer specializing in machine learning pipelines, modern React applications, and data systems. Feel free to ask about his projects, certifications, or internships!`;
  }, []);

  const handleUserQuery = useCallback((queryText) => {
    if (!queryText.trim()) return;

    const userMessage = { sender: 'user', text: queryText };
    setMessages(prev => [...prev, userMessage]);
    setInputText('');

    const botResponse = getAssistantAnswer(queryText);
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'bot', text: botResponse }]);
      speakText(botResponse);
    }, 300);
  }, [getAssistantAnswer, speakText]);

  useEffect(() => {
    handleQueryRef.current = handleUserQuery;
  }, [handleUserQuery]);

  // Speech Recognition Hook
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onstart = () => setIsListening(true);
      recognition.onend = () => setIsListening(false);
      recognition.onerror = () => setIsListening(false);

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        if (transcript && handleQueryRef.current) {
          handleQueryRef.current(transcript);
        }
      };

      recognitionRef.current = recognition;
    }

    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isSpeaking]);

  const toggleListening = () => {
    if (!recognitionRef.current) {
      alert("Speech recognition is not supported in this browser. You can still type your questions!");
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
    } else {
      if (window.speechSynthesis) window.speechSynthesis.cancel();
      setIsSpeaking(false);
      try {
        recognitionRef.current.start();
      } catch (e) {
        console.error(e);
      }
    }
  };

  const toggleVoiceAudio = () => {
    if (isSpeaking && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
    setVoiceEnabled(!voiceEnabled);
  };

  return (
    <>
      {/* Floating Futuristic AI Assistant Trigger Orb */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            onClick={() => setIsOpen(true)}
            className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181C22]/90 border border-[var(--color-accent)]/40 text-xs font-semibold text-gray-200 shadow-xl cursor-pointer hover:border-[var(--color-accent)] backdrop-blur-md transition-all group"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
            <span>Ask Vinay AI</span>
            <span className="text-[10px] font-mono text-[var(--color-accent)] group-hover:translate-x-0.5 transition-transform">Voice ON</span>
          </motion.div>
        )}

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-[#181C22] to-[#252A34] border-2 border-[var(--color-accent)] flex items-center justify-center text-[var(--color-accent)] shadow-2xl cursor-pointer group glow-border"
          aria-label="Toggle Voice Assistant"
        >
          <div className="absolute -inset-1 rounded-full bg-[var(--color-accent)]/20 animate-pulse-ring pointer-events-none" />

          {isSpeaking ? (
            <div className="flex items-center gap-0.5 h-6">
              <span className="w-1 bg-[var(--color-accent)] rounded-full animate-voice-1" />
              <span className="w-1 bg-[var(--color-accent)] rounded-full animate-voice-2" />
              <span className="w-1 bg-[var(--color-accent)] rounded-full animate-voice-3" />
              <span className="w-1 bg-[var(--color-accent)] rounded-full animate-voice-4" />
              <span className="w-1 bg-[var(--color-accent)] rounded-full animate-voice-5" />
            </div>
          ) : isListening ? (
            <Radio className="w-6 h-6 animate-pulse text-red-400" />
          ) : (
            <Bot className="w-6 h-6 group-hover:rotate-12 transition-transform" />
          )}
        </motion.button>
      </div>

      {/* Voice Assistant Interactive Modal Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[92vw] sm:w-[420px] max-h-[580px] bg-[#14171E] border border-[var(--color-accent)]/50 rounded-3xl shadow-2xl overflow-hidden flex flex-col backdrop-blur-xl"
          >
            {/* Header */}
            <div className="p-4 bg-[#1C212B] border-b border-[#2C323D] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-9 h-9 rounded-full bg-[#14171E] border border-[var(--color-accent)] flex items-center justify-center text-[var(--color-accent)]">
                  <Bot className="w-5 h-5" />
                  {isSpeaking && (
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[var(--color-accent)] animate-ping" />
                  )}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    <span>Vinay AI Assistant</span>
                    <Sparkles className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                  </h4>
                  <span className="text-[11px] text-gray-400 font-mono">
                    {isSpeaking ? 'Speaking response...' : isListening ? 'Listening to voice...' : 'Ready to assist you'}
                  </span>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={toggleVoiceAudio}
                  className="p-1.5 rounded-lg text-gray-300 hover:text-white hover:bg-[#252B38] transition-colors"
                  title={voiceEnabled ? 'Mute voice audio' : 'Unmute voice audio'}
                >
                  {voiceEnabled ? <Volume2 className="w-4 h-4 text-[var(--color-accent)]" /> : <VolumeX className="w-4 h-4 text-gray-500" />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg text-gray-300 hover:text-white hover:bg-[#252B38] transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Audio Wave Visualizer Strip */}
            <div className="px-4 py-2 bg-[#101217] border-b border-[#222731] flex items-center justify-between text-[11px] font-mono text-gray-400">
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${isSpeaking ? 'bg-[var(--color-accent)] animate-pulse' : isListening ? 'bg-red-400 animate-ping' : 'bg-gray-600'}`} />
                <span>{isSpeaking ? 'AUDIO PLAYING' : isListening ? 'MIC ACTIVE — SPEAK NOW' : 'AI STANDBY'}</span>
              </div>
              
              {isSpeaking && (
                <div className="flex items-center gap-1 h-3">
                  <span className="w-0.5 bg-[var(--color-accent)] animate-voice-1" />
                  <span className="w-0.5 bg-[var(--color-accent)] animate-voice-2" />
                  <span className="w-0.5 bg-[var(--color-accent)] animate-voice-3" />
                  <span className="w-0.5 bg-[var(--color-accent)] animate-voice-4" />
                  <span className="w-0.5 bg-[var(--color-accent)] animate-voice-5" />
                </div>
              )}
            </div>

            {/* Message Conversation Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 max-h-[300px]">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.sender === 'bot' && (
                    <div className="w-6 h-6 rounded-full bg-[#1C212B] border border-[var(--color-accent)]/60 flex items-center justify-center text-[var(--color-accent)] shrink-0 mt-1">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                  )}

                  <div
                    className={`p-3 rounded-2xl text-xs sm:text-sm leading-relaxed max-w-[82%] ${
                      msg.sender === 'user'
                        ? 'bg-[var(--color-accent)] text-black font-medium rounded-tr-xs'
                        : 'bg-[#1C212B] text-gray-200 border border-[#2D3340] rounded-tl-xs shadow-md'
                    }`}
                  >
                    {msg.text}
                  </div>

                  {msg.sender === 'user' && (
                    <div className="w-6 h-6 rounded-full bg-[#2A3140] flex items-center justify-center text-gray-300 shrink-0 mt-1">
                      <User className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Action Suggestion Chips */}
            <div className="px-3 py-2 bg-[#161922] border-t border-[#252B38] flex gap-1.5 overflow-x-auto no-scrollbar">
              <button
                onClick={() => handleUserQuery("Who is Bangalore Vinay?")}
                className="whitespace-nowrap px-2.5 py-1 rounded-full bg-[#202532] border border-[#2E3646] hover:border-[var(--color-accent)] text-[11px] text-gray-300 transition-colors cursor-pointer"
              >
                👤 Who is Vinay?
              </button>
              <button
                onClick={() => handleUserQuery("Tell me about his top ML & Data projects")}
                className="whitespace-nowrap px-2.5 py-1 rounded-full bg-[#202532] border border-[#2E3646] hover:border-[var(--color-accent)] text-[11px] text-gray-300 transition-colors cursor-pointer"
              >
                📊 Top Projects
              </button>
              <button
                onClick={() => handleUserQuery("List his verified certifications")}
                className="whitespace-nowrap px-2.5 py-1 rounded-full bg-[#202532] border border-[#2E3646] hover:border-[var(--color-accent)] text-[11px] text-gray-300 transition-colors cursor-pointer"
              >
                🏆 Certifications
              </button>
              <button
                onClick={() => handleUserQuery("How can I contact Vinay?")}
                className="whitespace-nowrap px-2.5 py-1 rounded-full bg-[#202532] border border-[#2E3646] hover:border-[var(--color-accent)] text-[11px] text-gray-300 transition-colors cursor-pointer"
              >
                📬 Contact Info
              </button>
            </div>

            {/* Input Bar with Voice Mic & Send Button */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleUserQuery(inputText);
              }}
              className="p-3 bg-[#1C212B] border-t border-[#2C323D] flex items-center gap-2"
            >
              <button
                type="button"
                onClick={toggleListening}
                className={`p-2.5 rounded-full border transition-all cursor-pointer ${
                  isListening
                    ? 'bg-red-500/20 border-red-500 text-red-400 animate-pulse'
                    : 'bg-[#14171E] border-[#2E3646] hover:border-[var(--color-accent)] text-[var(--color-accent)]'
                }`}
                title={isListening ? 'Stop listening' : 'Speak into microphone'}
              >
                {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
              </button>

              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder={isListening ? 'Listening to voice...' : 'Ask about Vinay or tap microphone...'}
                className="flex-1 bg-[#14171E] border border-[#2E3646] rounded-full px-4 py-2 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[var(--color-accent)]"
              />

              <button
                type="submit"
                disabled={!inputText.trim()}
                className="p-2.5 rounded-full bg-[var(--color-accent)] hover:opacity-90 disabled:opacity-40 text-black transition-all cursor-pointer shadow-md"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
