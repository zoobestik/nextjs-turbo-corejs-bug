import Button from '@test-babel-compiled/component/button'; // link to compiled code in root dir

export default function Home() {
  return <>
    <h1>I'm not working in --turbo!</h1>
    <Button onClick={() => alert('Clicked!')}>click me!</Button>
  </>
}
