function ShortenedText(text: string, maxLength: number, showFullText: boolean) {
  if (!showFullText) {
    return (
        <span>{text.substring(0, maxLength)}...</span>
    );
  } else {
    return <span>{text}</span>;
  }
}

export default ShortenedText;
