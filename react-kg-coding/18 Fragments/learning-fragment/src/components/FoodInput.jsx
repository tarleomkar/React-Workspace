import styles from "./FoodInput.module.css";

const FoodInput = ({handleOnChange}) => {
    const handleOnChange = (event) => {
        console.log(event.target.value);
    }

    return (
        <input 
            type="text" 
            placeholder="Enter Food item here" 
            className={styles.FoodInput}  
            onChange={handleOnChange}
        />
    );
};

export default FoodInput;

// Get all vlaues while entering
// i
// FoodInput.jsx:9 ic
// FoodInput.jsx:9 ice
// FoodInput.jsx:9 icec
// FoodInput.jsx:9 icecr
// FoodInput.jsx:9 icecre
// FoodInput.jsx:9 icecrea
// FoodInput.jsx:9 icecream
// FoodInput.jsx:9 icecreame
// FoodInput.jsx:9 icecreame 
// FoodInput.jsx:9 icecreame b
// FoodInput.jsx:9 icecreame ba
// FoodInput.jsx:9 icecreame bay
// FoodInput.jsx:9 icecreame ba
// FoodInput.jsx:9 icecreame baa
// FoodInput.jsx:9 icecreame ba
// FoodInput.jsx:9 icecreame bab
// FoodInput.jsx:9 icecreame baby