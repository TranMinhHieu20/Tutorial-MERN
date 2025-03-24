import { Container } from '@mui/material';
// eslint-disable-next-line
import HomePage from './pages/HomePage';
import Header from './components/Header';
import PostList from './components/PostList';

function App() {
    return (
        <>
            <Container maxWidth="lg" className={{}}>
                <Header />
                <PostList />
            </Container>
        </>
    );
}

export default App;
