export function addUser(name) {
    return {
        type: "ADD_USER",
        payload: {
          firstName: name,
          lastName: "customlastname",
          email: "custom@example.com",
          hobbies: ["hobby1", "hobby2"]
        }
      };
}