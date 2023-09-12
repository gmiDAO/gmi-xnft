


export const getComments = async () => {
    return [
      {
        id: "1",
        body: "First comment",
        username: "Miguel",
        userId: "1",
        parentId: null,
        createdAt: "2021-08-16T23:00:33.010+02:00",
      },
      {
        id: "2",
        body: "Second comment",
        username: "Malcom",
        userId: "2",
        parentId: null,
        createdAt: "2021-08-16T23:00:33.010+02:00",
      },
      {
        id: "3",
        body: "First comment first child",
        username: "Ruben",
        userId: "3",
        parentId: "1",
        createdAt: "2021-08-16T23:00:33.010+02:00",
      },
      {
        id: "4",
        body: "Second comment second child",
        username: "Miguel",
        userId: "1",
        parentId: "2",
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