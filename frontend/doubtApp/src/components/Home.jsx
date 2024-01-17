import { useNavigate } from "react-router-dom"

export function Home(){
      const navigate = useNavigate();
      function adminPage(){
            navigate('/admin');
      }
      function studentPage(){
            navigate('/student');
      }
      return(
            <div>
                  <button onClick={adminPage}>admin page</button>
                  <button onClick={studentPage}>student page</button>
            </div>
      )
}