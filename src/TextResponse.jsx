export default function TextResponse(val, index, messageClass) {
  return (
    <p key={index} className={messageClass + " bg-stone-200"}>
      {val}
    </p>
  );
}
