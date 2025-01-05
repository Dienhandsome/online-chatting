

import InputBase from '@mui/material/InputBase';

import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';
import '../styles/home/search-tool.css';
import { useState } from 'react';
import useRoom from '../zustand/useRoom';
import useGetRooms from '../hooks/useGetRooms'
import toast from 'react-hot-toast';
// update search tool success
function SearchTool() {
  const [search, setSearch] = useState("")
  const {setSelectedRoom} = useRoom()
  const {rooms} = useGetRooms()
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!search) return;
    if(search.length < 3){
      return toast.error('Tìm kiếm ít nhất ba từ')
    }
    const room = rooms.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()))
    if(room){
      setSelectedRoom(room)
      setSearch('');
    } else toast.error("Không tìm thấy người dùng!")
  }
  return (
    <Paper className='search-tool'
        component="form"
        sx={{borderRadius: 0}}
        onSubmit={handleSubmit}
    >
      <InputBase className='search-input'
        
        placeholder="Tìm kiếm"
        inputProps={{ 'aria-label': 'search' }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <IconButton type="submit" className='search-button' aria-label="search">
        <SearchIcon />
      </IconButton>
      
    </Paper>
  )
}


export default SearchTool;
