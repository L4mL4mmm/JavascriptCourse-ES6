async function getUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const users = await response.json();
        
        console.log("Danh sách tên người dùng:");
        users.forEach(user => {
            console.log(user.name);
        });
        
    } catch (error) {
        console.error("Lỗi khi fetch dữ liệu:", error);
    }
}

getUsers();