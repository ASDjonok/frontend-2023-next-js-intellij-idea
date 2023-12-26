function HelloWorld(props) {
    console.log("ASD", props);
    // const name = props.name;
    const {name} = props;
    return <p>Hello {name}!</p>
}

export default function Home() {
    HelloWorld(1);
    return (
        <>
          {/*<p>Hello World!2</p>
            <p>Hello World!3</p>*/}
          <HelloWorld name="world1"/>
          <HelloWorld name="world2"/>
        </>
    );
}
