"use client"
import React from 'react'
import PropTypes from 'prop-types'
import Collapse from '@mui/material/Collapse'
import Link from 'next/link'
import List from '@mui/material/List'
import { UseAccordionStore } from '@/app/store/navAccordion'
import TripOriginIcon from '@mui/icons-material/TripOrigin'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { UseNaveOpenStore } from '@/app/store/NavIsOpen'
import { usePathname } from 'next/navigation'
import { green } from '@mui/material/colors'
import { styled } from '@mui/material/styles'

const StyledListItem = styled(ListItemButton)(({ theme, active }) => ({
  pl: theme.spacing(4),
  borderLeft: active ? `3px solid ${green[500]}` : 'none',
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
  '&.Mui-selected': {
    backgroundColor: theme.palette.action.selected,
  },
}))

function ListChilde({ href, lili, index, itemId }) {
  const pathName = usePathname()
  const { isOpen } = UseNaveOpenStore()
  const { isIndex } = UseAccordionStore()
  const isActive = pathName === href

  return (
    <Collapse 
      in={isOpen && isIndex === index} 
      timeout="auto" 
      unmountOnExit
      sx={{ overflow: 'hidden' }}
    >
      <List component="div" disablePadding dense>
        <StyledListItem
          component={Link}
          href={href}
          active={isActive}
          selected={isActive}
          aria-current={isActive ? 'page' : undefined}
        >
          <ListItemIcon sx={{ minWidth: 36 }}>
            <TripOriginIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText 
            primary={lili} 
            primaryTypographyProps={{
              variant: 'body2',
              fontWeight: isActive ? 600 : 400
            }}
          />
        </StyledListItem>
      </List>
    </Collapse>
  )
}

ListChilde.propTypes = {
  href: PropTypes.string.isRequired,
  lili: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  itemId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
}

export default React.memo(ListChilde)