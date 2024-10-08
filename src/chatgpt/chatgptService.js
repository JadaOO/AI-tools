import OpenAI from "openai";
const openai = new OpenAI();

const callChatGPT = async () => {
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      {
        role: "user",
        content: "Write a haiku about recursion in programming.",
      },
    ],
  });

  console.log(completion.choices[0].message);
  console.log("hi");
};

export default callChatGPT;
