export const askAI = async (chatHistory, parameters) => {
    // 根据你的后端接口设计，这里传递整个对话历史和参数
    const response = await fetch('http://localhost:5000/ask', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            // 根据后端接口要求封装数据
            messages: [
                { role: 'system', content: parameters.systemPrompt },
                ...chatHistory
            ],
            model: parameters.model,
            temperature: parameters.temperature,
            max_tokens: parameters.max_tokens,
            top_p: parameters.top_p,
            top_k: parameters.top_k,
            min_p: parameters.min_p,
        })
    });
    return response.json();
};
