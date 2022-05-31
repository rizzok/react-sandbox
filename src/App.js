import {TodoList} from "./components/TodoList";
import {GlobalProvider} from "./context/GlobalState";
import styled from 'styled-components';
import {useState} from "react";
import {ButtonAdd} from "./components/ButtonAdd";
import {FormTodo} from "./components/FormTodo";

const Wrapper = styled.section`
  background-color: #fdfdfd;
  width: 360px;
  display: flex;
  flex-direction: column;
  border-radius: 3%;
`

const Title = styled.h1`
  text-align: center;
`

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 1rem;
`

function App() {
    const [isEditing, toggleForm] = useState(false);

    return (
        <GlobalProvider>
            <Wrapper>
                <Title>Todo App</Title>
                <TodoList/>
                <FormWrapper>
                    {isEditing
                        ? <FormTodo isEditing={isEditing} toggleForm={toggleForm}/>
                        : <ButtonAdd isEditing={isEditing} toggleForm={toggleForm}/>
                    }
                </FormWrapper>
            </Wrapper>
        </GlobalProvider>
    );
}

export default App;
