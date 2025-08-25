        // this will toggle the isEditing state
        // isEditing ? false : true --> flawed because complicated
        // !isEditing --> not like this if based on previous value
        // setIsEditing(!editing); // true
        // setIsEditing(!editing); // true
        // setIsEditing(editing => !editing); // true
        // setIsEditing(editing => !editing); // false