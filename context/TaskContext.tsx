"use client"
import { unique } from "next/dist/build/utils";
import React, { createContext, useContext } from "react";

interface Task {
    // Define the structure of your task objec
    id: string,
    title: string,
    description: string
}

interface TaskContextType {
    tasks: Task[];
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const useTasks = (): TaskContextType => {
    const context = useContext(TaskContext);
    if (!context) throw new Error("useTasks must be within TaskProvider");
    return context;
};

interface TaskProviderProps {
    children: React.ReactNode;
}

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
    const tasks: Task[] = [
        {
            id: '1',
            title: "my first task",
            description: "my first task description"
        }, {
            id: '2',
            title: "my second task",
            description: "my second task description"
        }, {
            id: '3',
            title: "my third task",
            description: "my third task description"
        },
    ];

    return (
        <TaskContext.Provider value={{ tasks }}>
            {children}
        </TaskContext.Provider>
    );
};