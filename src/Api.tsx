


export type UserProfile = { 
  username: string,
  userId: string,
  createdAt: string,
  image: null,
}
const userData = [
  {userId:"1", username:"Ruben"},
  {userId:"2", username:"Malcom"},
  {userId:"3", username:"Ritvik"},
  {userId:"4", username:"Miguel"}
]



export const getComments = async () => {
    return [
      {
        id: "1",
        body: "First comment",
        username: userData[0].username,
        userId: userData[0].userId,
        parentId: null,
        createdAt: "2021-08-16T23:00:33.010+02:00",
      },
      {
        id: "2",
        body: "Second comment",
        username: userData[1].username,
        userId: userData[1].userId,
        parentId: null,
        createdAt: "2021-08-16T23:00:33.010+02:00",
      },
      {
        id: "3",
        body: "First comment first child",
        username: userData[2].username,
        userId: userData[2].userId,
        parentId: "1",
        createdAt: "2021-08-16T23:00:33.010+02:00",
      },
      {
        id: "4",
        body: "Second comment second child",
        username: userData[3].username,
        userId: userData[3].userId,
        parentId: "2",
        createdAt: "2021-08-16T23:00:33.010+02:00",
      },
      {
        id: "5",
        body: "Something else",
        username: userData[0].username,
        userId: userData[0].userId,
        parentId: null,
        createdAt: "2021-08-16T23:00:33.010+02:00",
      },

    ];
  };
  
  export const createComment = async (text:any, parentId = null) => {
    return {
      id: Math.random().toString(36).substr(2, 9),
      body: text,
      parentId,
      userId: "1",
      username: "Ruben",
      createdAt: new Date().toISOString(),
    };
  };
  
  export const updateComment = async (text:any) => {
    return { text };
  };
  
  export const deleteComment = async () => {
    return {};
  };

  export const cancelComment = async () => {
    return {}
  }