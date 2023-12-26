// todo tic-tac-toe (from sandbox.html)
// todo redux?

function HelloWorld(props) {
    console.log("ASD", props);
    // const name = props.name;
    const {name} = props;
    return <p>Hello {name}!</p>
}

// todo check "default" and "export" key words functionality
export default function Home123() {
    HelloWorld(1);
    return (
        <>
          {/*<p>Hello World!2</p>
            <p>Hello World!3</p>*/}
          <HelloWorld name="world123"/>
          <HelloWorld name="world2"/>
        </>
    );
}
