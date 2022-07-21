import { Notes } from "./Notes";

export const Home = (props) => {
  return (
    <div>
     
      <Notes showAlert={props.showAlert}/>
    </div>
  );
};
