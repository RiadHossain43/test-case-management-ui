export default function HTTPSLink(props) {
  console.log("in")
  return (
    <>
      <a href={props.decoratedText}>{props.children}</a>
    </>
  );
}
