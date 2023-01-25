import React, { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { fetchThread, selectThread } from './threadSlice'
import { Stack, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'

export const Threads = () => {
    const title = useAppSelector(selectThread).thread.title
    const content = useAppSelector(selectThread).thread.content
    const username = useAppSelector(selectThread).thread.user
    const error = useAppSelector(selectThread).error
    const dispatch = useAppDispatch()
    const { id } = useParams<string>()

    useEffect(() => {
        dispatch(fetchThread(Number(id)))
    }, [dispatch, id])

    return (
        <>
            <div>
                <Stack 
                spacing={4} 
                style={{
                    transform: 'translate(0%, 50%)',
                }}>
                    <Stack
                    spacing={5}
                    alignItems='center'>
                        <Stack direction='row' alignItems='center'>
                            <Typography variant='h2'>{title}</Typography>
                            <Typography variant='h6' style={{transform: 'translate(400%, 0%)'}}>{username}</Typography>
                        </Stack>
                        <Typography variant='body1'>{content}</Typography>
                    </Stack>
                </Stack>
                <Typography variant='h1'>{error}</Typography>
            </div>
        </>
    )
}