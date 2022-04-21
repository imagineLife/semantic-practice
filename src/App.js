import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <section>
        <h2>On Semantic-Release Package</h2>
        <ul>
          <h3>Install semantic-release</h3>
          <li>
            Install a package globally: <code>npm i -g semantic-release-cli</code>
          </li>
          <h3>Install commitizen && cz-conventional-changelog</h3>
          <li>
            <code>npm i -D commitizen cz-conventional-changelog</code>
            <p>commitizen allows for writing helpful commit messages. commitizen adds a binary to node_mods dir, `git cz` which will get used in the package.json scripts</p>
            <p>cz... asks questions to generate a commit message</p>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default App;
