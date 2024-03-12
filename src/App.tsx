import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([
    { name: "John", age: 25 },
    { name: "Jane", age: 24 },
    { name: "Jack", age: 34 },
  ]);

  const dragPerson = useRef<number>(0);
  const draggedOverPerson = useRef<number>(0);

  const handleSort = () => {
    const usersClone = [...users];
    const temp = usersClone[dragPerson.current];
    usersClone[dragPerson.current] = usersClone[draggedOverPerson.current];
    usersClone[draggedOverPerson.current] = temp;
    setUsers(usersClone);
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              key={index}
              draggable
              onDragStart={() => (dragPerson.current = index)}
              onDragEnter={() => (draggedOverPerson.current = index)}
              onDragEnd={handleSort}
              onDragOver={(e) => e.preventDefault()}
            >
              <td>{user.name}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
