
'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { aiAdmissionsGuidanceTool } from '@/ai/flows/ai-admissions-guidance-tool-flow';
import { Bot, User, Send, Loader2 } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

export function AIAdmissionsTool() {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; text: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!query.trim()) return;

    const userMessage = query;
    setMessages((prev) => [...prev, { role: 'user', text: userMessage }]);
    setQuery('');
    setIsLoading(true);

    try {
      const response = await aiAdmissionsGuidanceTool({ query: userMessage });
      setMessages((prev) => [...prev, { role: 'assistant', text: response.answer }]);
    } catch (error) {
      setMessages((prev) => [...prev, { role: 'assistant', text: "I'm sorry, I'm having trouble connecting right now. Please contact the school directly." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto overflow-hidden shadow-xl border-primary/20">
      <CardHeader className="bg-primary text-primary-foreground">
        <div className="flex items-center gap-3">
          <Bot size={24} />
          <div>
            <CardTitle>Admissions Assistant</CardTitle>
            <CardDescription className="text-primary-foreground/80">Ask me anything about admissions and policies.</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-[400px] p-4">
          <div className="space-y-4">
            {messages.length === 0 && (
              <div className="text-center text-muted-foreground py-10">
                <p>Hello! I am your Canaan Connect AI assistant.</p>
                <p className="text-sm">Try asking: "What are the KG admission requirements?"</p>
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-lg flex gap-3 ${
                  m.role === 'user' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted text-foreground'
                }`}>
                  {m.role === 'assistant' && <Bot className="shrink-0 mt-1" size={18} />}
                  <span className="text-sm leading-relaxed">{m.text}</span>
                  {m.role === 'user' && <User className="shrink-0 mt-1" size={18} />}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-muted p-3 rounded-lg flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span className="text-sm">Typing...</span>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
        <div className="p-4 border-t flex gap-2 bg-background">
          <Input 
            placeholder="Type your question..." 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            disabled={isLoading}
          />
          <Button onClick={handleSend} size="icon" disabled={isLoading}>
            <Send size={18} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
