import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUserStore = create(
  persist(
    (set) => ({
      users: [],
      addUser: (user) =>
        set((state) => ({
          users: [...state.users, { id: Date.now(), ...user }],
        })),
      updateUser: (id, updatedUser) =>
        set((state) => ({
          users: state.users.map((user) =>
            user.id === id ? { ...user, ...updatedUser } : user
          ),
        })),
      deleteUser: (id) =>
        set((state) => ({
          users: state.users.filter((user) => user.id !== id),
        })),
    }),
    {
      name: "user-storage", // Local Storage ichidagi saqlash kaliti
    }
  )
);

export default useUserStore;
