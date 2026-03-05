import Select from "react-select";
import AsyncSelect from "react-select/async";
import CreatableSelect from "react-select/creatable";

const App = () => {
  // const [fruit, setFruit] = useState(null)

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry",},
    { value: "vanilla", label: "Vanilla" },
  ];

  const customStyle = {
    control: (base) => ({
      ...base,
      borderColor:"red",
      borderWidth:"4px",
      padding:"5px",
    }),
    option:(base)=>({
      ...base,
      color:"blue",
      backgroundColor:"white",
    }),
     singleValue:(base)=>({
      ...base,
      color:"red",
      fontWeight:"bold"
    }),
  };

  return (
    <div style={{ width: "300px" }}>
      <CreatableSelect
        styles={customStyle}
        options={options}
        onChange={(selected) => console.log(selected)}
        isMulti
        placeholder="Select you fruit"
        isClearable
        // defaultValue={options[1]}
        // isSearchable={false}
        // isDisabled={false}
      />
      {/*<p>{fruit?.label}</p>*/}

      <br/>


      <AsyncSelect loadOptions={(input)=>{
        fetch(`https://jsonplaceholder.typicode.com/users?username=${input}`)
        .then((res)=> res.json())
        .then((data)=> data.map((user)=>({
          value:user.id,
          label:user.name,
        })),
      )
      {user && <p>Selected User: <b>{user.label}</b></p>}


      }}/>
    </div>

    

  );
};

export default App;
