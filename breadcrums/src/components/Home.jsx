import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { addBreadcrumToLast } from '../slice/breadcrumSlice';

const Home = () => {
    const dispatch = useDispatch();
    const categoryList = [
        { name: 'Electronics', path: '/electronics' },
        { name: 'Kitchen', path: '/kitchen'},
        { name: 'Fashion', path: '/fashion'},
        { name: 'Toys', path: '/toys'},
    ]
    const handleClick = (category) => {
        dispatch(addBreadcrumToLast(category)); 
    } 
    return (
        <div className='cotegories'>
            {
                categoryList?.map(category => {
                    return (
                        <Link key={category.name} onClick={e => handleClick(category)} to={category.path}>
                            {category.name}
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default Home;
