
// function getUser(userId){
//     return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//     .then(response => response.json())
//     .then(user => {
//         console.log('User name:', user.name);
//     })
//     .catch(error => {
//         console.error('Error fetching user:', error);
//     });

// }

// // getUser(1);

// function getPost(postId){
//     return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//     .then(response => response.json())
//     .then(post => {
//         console.log('Post title:', post.title);
//     })
//     .catch(error => {
//         console.error('Error fetching post:', error);
//     });
// }

// // getPost(1);

// function getUserEmail(userId) {
//     return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//     .then(response => response.json())
//     .then(user => {
//         console.log('User email:', user.email);
//     })
//     .catch(error => {
//         console.error('Error fetching user email:', error);
//     });
// }
// // getUserEmail(1);

// function listUserTodos(userId) {
//     return fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
//     .then(response => response.json())
//     .then(todos => {
//         console.log(`User ${userId} has ${todos.length} todos.`);
//     })
//     .catch(error => {
//         console.error('Error fetching user todos:', error);
//     });
// }
// //  listUserTodos(1);

// function checkPostExists(postId) {
//     return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//     .then(response => {
//         if (response.ok) {
//             console.log(`Post with ID ${postId} exists.`);
//         } else {
//             console.log(`Post with ID ${postId} does not exist.`);
//         }
//     })
//     .catch(error => {
//         console.error('Error checking post existence:', error);
//     });
// }


// // checkPostExists(-1);
// // checkPostExists(1);

// function fetchWithDelay(url, delay){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             fetch(url)
//             .then(response => response.json())
//             .then(data => {
//                 console.log('First 50 chars:', JSON.stringify(data).substring(0, 50));
//                 resolve(data);
//             })
//             .catch(error => {
//                 console.error('Error fetching data after delay:', error);
//                 reject(error);
//             });
//         }, delay);
//     });
// }

// // fetchWithDelay('https://jsonplaceholder.typicode.com/posts/1', 2000)


// function showKeys(url){ 
//     return fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         console.log('Keys:', Object.keys(data));
//     })
//     .catch(error => {
//         console.error('Error fetching keys:', error);
//     });
// } 

// // const url = 'https://jsonplaceholder.typicode.com/users/1';
// // showKeys(url);

// function getUserFirstPost(userId) {
//     return fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
//     .then(response => response.json())
//     .then(posts => {
//         if (posts.length > 0) {
//             console.log('First post title:', posts[0].title);
//         } else {
//             console.log('No posts found for user:', userId);
//         }
//     })
//     .catch(error => {
//         console.error('Error fetching user posts:', error);
//     });
// }

// // getUserFirstPost(1);

// function getPostCommentsCount(postId){
//     return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
//     .then(response => response.json())
//     .then(comments => {
//         console.log(`Post ${postId} has ${comments.length} comments.`);
//     })
//     .catch(error => {
//         console.error('Error fetching post comments:', error);
//     });
// }

// // getPostCommentsCount(1);

// function todoAndUser(todoId) {
//     return fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
//     .then(response => response.json())
//     .then(todo => {
//         console.log(`Todo: ${todo.title}`);
//         return fetch(`https://jsonplaceholder.typicode.com/users/${todo.userId}`);
//     })
//     .then(response => response.json())
//     .then(user => {
//         console.log(`User: ${user.name}`);
//     })
//     .catch(error => {
//         console.error('Error fetching todo and user:', error);
//     });
// }

// // todoAndUser(1);

const BASE_URL = 'https://jsonplaceholder.typicode.com';

// פונקציית עזר גנרית שמקבלת Endpoint, מבצעת Fetch, בודקת תקינות ומחזירה JSON
function apiFetch(endpoint) {
    return fetch(`${BASE_URL}${endpoint}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        });
}

// 1. קבלת משתמש
function getUser(userId) {
    return apiFetch(`/users/${userId}`)
        .then(user => {
            console.log("User's name:", user.name);
            return user;
        })
        .catch(error => console.error('Error fetching user:', error));
}

// 2. קבלת פוסט
function getPost(postId) {
    return apiFetch(`/posts/${postId}`)
        .then(post => {
            console.log('Post title:', post.title);
            return post;
        })
        .catch(error => console.error('Error fetching post:', error));
}

// 3. אימייל של משתמש
function getUserEmail(userId) {
    return apiFetch(`/users/${userId}`)
        .then(user => {
            console.log("User's email:", user.email);
            return user;
        })
        .catch(error => console.error('Error fetching user email:', error));
}

// 4. משימות של משתמש
function listUserTodos(userId) {
    return apiFetch(`/todos?userId=${userId}`)
        .then(todos => {
            console.log(`User ${userId} has ${todos.length} todos.`);
            return todos;
        })
        .catch(error => console.error('Error fetching user todos:', error));
}

// 5. בדיקה האם פוסט קיים
function checkPostExists(postId) {
    return fetch(`${BASE_URL}/posts/${postId}`)
        .then(response => {
            if (response.ok) {
                console.log(`Post with ID ${postId} exists.`);
            } else {
                console.log(`Post with ID ${postId} does not exist.`);
            }
        })
        .catch(error => console.error('Error checking post existence:', error));
}

// 6. השهייה עם Fetch (משתמש בכתובת מלאה או חלקית לפי בחירתך)
function fetchWithDelay(endpoint, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            apiFetch(endpoint)
                .then(data => {
                    console.log('First 50 chars:', JSON.stringify(data).substring(0, 50));
                    resolve(data);
                })
                .catch(error => {
                    console.error('Error fetching data after delay:', error);
                    reject(error);
                });
        }, delay);
    });
}

// 7. הצגת מפתחות של ה-JSON
function showKeys(endpoint) {
    return apiFetch(endpoint)
        .then(data => {
            console.log('Keys:', Object.keys(data));
            return data;
        })
        .catch(error => console.error('Error fetching keys:', error));
}

// 8. פוסט ראשון של משתמש
function getUserFirstPost(userId) {
    return apiFetch(`/users/${userId}/posts`)
        .then(posts => {
            if (posts.length > 0) {
                console.log('First post title:', posts[0].title);
            } else {
                console.log('No posts found for user:', userId);
            }
            return posts;
        })
        .catch(error => console.error('Error fetching user posts:', error));
}

// 9. ספירת תגובות לפוסט
function getPostCommentsCount(postId) {
    return apiFetch(`/posts/${postId}/comments`)
        .then(comments => {
            console.log(`Post ${postId} has ${comments.length} comments.`);
            return comments;
        })
        .catch(error => console.error('Error fetching post comments:', error));
}

// 10. משימה ואז משתמש משורשר
function todoAndUser(todoId) {
    return apiFetch(`/todos/${todoId}`)
        .then(todo => {
            console.log(`Todo title: ${todo.title}`);
            return apiFetch(`/users/${todo.userId}`);
        })
        .then(user => {
            console.log(`User name: ${user.name}`);
            return user;
        })
        .catch(error => console.error('Error fetching todo and user:', error));
}
