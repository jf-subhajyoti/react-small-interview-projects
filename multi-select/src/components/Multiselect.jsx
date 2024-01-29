import { useState } from "react";

import { users } from "../core/users";
import './Multiselect.css';

const Multiselect = () => {
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [displayedUsers, setDisplayedUsers] = useState(users);
    const [searchValue, setSearchValue] = useState('');

    const handleInputSearch = (event) => {
        setSearchValue(event.target.value);
        let filteredUsers = users.filter(user => user.fullName.toLowerCase().includes(event.target.value.toLowerCase()));
        setDisplayedUsers(filteredUsers);
    }
    const handleUserSelect = (event) => {
        event.stopPropagation();
        if(event?.target?.nodeName === 'DIV') {
            let selectedUser = JSON.parse(event.target.dataset.user)
            if(!selectedUsers.some(user => user.id === selectedUser.id)) {
                setSelectedUsers(prev => [...prev, selectedUser]);
            }
        }
    }
    const handleInputKeyPress = (event) => {
        if (event.code === "Backspace") {
            if(searchValue === '') {
                if(selectedUsers.length) {
                    setSelectedUsers(prev => prev.slice(0, -1));
                }
            }
        }
    }

  return (
    <div className="multi_search">
        <div className="search_wrapper">
              <div className="selected_users_wrapper">
                {
                    selectedUsers?.map(user => {
                        return (
                            <span key={user.id} className="selected_user">{user.fullName}</span>
                        )
                    })
                }
            </div>
            <input type="text" value={searchValue} onChange={handleInputSearch} onKeyDown={handleInputKeyPress} />
        </div>
        <div className="search_suggestions_wrapper" onClick={handleUserSelect}>
            {
                displayedUsers?.map(user => {
                    return (
                        <div className="search_suggestions" data-user={JSON.stringify(user)} key={user.id}>{user.fullName}</div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Multiselect
