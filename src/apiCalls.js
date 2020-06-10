const randomWords = require('random-words');

export const fetchWords = async (words) => {
  const wordsData = await words.map(async (word) => {
    const response = await fetch(`https://owlbot.info/api/v4/dictionary/${word}`, {
      headers: {
        Authorization: "Token 2c7169bd30a747ad94dcd30355c31578110dc7aa"
      }
    })
    const data = await response.json()
    if(data.definitions === undefined) {
      return fetchNewWord();
    }
    return data;
  })
  return wordsData
}

export const fetchNewWord = async () => {
  const word = randomWords()
  const response = await fetch(`https://owlbot.info/api/v4/dictionary/${word}`, {
      headers: {
        Authorization: "Token 2c7169bd30a747ad94dcd30355c31578110dc7aa"
      }
    })
    const data = await response.json();
    return data;
}