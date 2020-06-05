export const fetchWord = async (word) => {
  const response = await fetch(`https://owlbot.info/api/v4/dictionary/${word}`, {
    headers: {
      Authorization: "Token 2c7169bd30a747ad94dcd30355c31578110dc7aa"
    }
  })
  const data = await response.json()
  return data
  }