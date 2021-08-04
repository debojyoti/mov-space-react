
const Utils = {
  trimString: (text, maxLength = 40) => {
    if (text?.length) {
      if (text.length >= maxLength) {
        // Trim
        return text.substring(0, maxLength) + "...";
      } else {
        return text;
      }
    } else {
      return "";
    }
  } 
};

export default Utils;
