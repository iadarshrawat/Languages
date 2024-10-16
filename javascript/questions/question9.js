function capitalizeWords(sentence) {
    if (!sentence) return ""; // handle empty input
  
    // Split the sentence into words, capitalize each word, and join them back
    return sentence
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }
  
  // Example usage:
  let sentence = "hELLO, wORLD! How aRe yoU?";
  let formattedSentence = capitalizeWords(sentence);
  console.log(formattedSentence); // Output: "Hello, World! How Are You?"