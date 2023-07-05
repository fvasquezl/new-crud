"use client"
import Image from 'next/image'
import { useTasks } from '@/context/TaskContext'

export default function Home() {
  const { tasks } = useTasks()

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <h1>{task.id} {task.title}</h1>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  )
}
