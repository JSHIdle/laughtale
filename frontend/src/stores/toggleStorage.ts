import {create} from "zustand";

type State = {
    isToggled: boolean,
    userToggle: boolean
}

type Action = {
    setUserToggle: (value:boolean) => void;
    setIsToggle: (value:boolean) => void
}

type ToggleStore  = State & Action;

export const useToggle = create<ToggleStore>((set) => {
    return {
        isToggled: false,
        userToggle: false,
        setIsToggle: (value: boolean) => {
            set((state) => {
                return {
                    ...state,
                    userToggle: false,
                    isToggled: value
                }
            })
        },
        setUserToggle: (value: boolean) => {
            set((state) => {
                return {
                    ...state,
                    isToggled: false,
                    userToggle: value
                }
            })

        }
    }
})