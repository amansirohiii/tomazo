// const heading = <h1 id="heading">Hello There</h1>;
const data={
    name: "aman",
    age: "19",
};
const Title = () => <h1>Hello there....</h1>;

const Heading = () => (
  <>
    {Title()}
    <h1 style={{color: "green"}}>{data.name} {data.age}</h1>
    {/* {console.log(Title())} */}
    <h1 className="heading">Namaste React!!!</h1>
  </>
);