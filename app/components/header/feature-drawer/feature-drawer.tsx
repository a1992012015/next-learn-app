"use client";

import { Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import AlarmIcon from '@mui/icons-material/Alarm';
import MenuIcon from "@mui/icons-material/Menu";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

const features = [
  { path: "/pokemon", name: "Pokemon", icon: <CatchingPokemonIcon/> },
  { path: "/photos", name: "Photos", icon: <InsertPhotoIcon/> },
  { path: "/counter", name: "Counter", icon: <AlarmIcon/> }
];

export default function FeatureDrawer() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div>
      <IconButton size="large" edge="start" sx={{ mr: 2 }} onClick={() => setOpen(true)}>
        <MenuIcon/>
      </IconButton>

      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <List sx={{ width: 300 }}>
          {features.map((feature, index) => {
            const isActive = pathname.startsWith(feature.path);
            return (
              <ListItem key={feature.name} disablePadding>
                <Link style={{ width: "100%" }} href={feature.path}>
                  <ListItemButton onClick={() => setOpen(false)} selected={isActive}>
                    <ListItemIcon>
                      {feature.icon}
                    </ListItemIcon>
                    <ListItemText primary={feature.name}/>
                  </ListItemButton>
                </Link>
              </ListItem>
            );
          })}
        </List>
        <Divider/>
      </Drawer>
    </div>
  );
}
