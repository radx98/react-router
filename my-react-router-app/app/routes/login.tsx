// import { Link } from "react-router";

export default function About() {
    return (
        <div id="auth">
            <form method='post'>
                <input name='email' placeholder='email' />
                <input name='password' placeholder='password' />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}
