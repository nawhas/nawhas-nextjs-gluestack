"use client";

import { useTheme } from "@/components/ui/ThemeProvider/ThemeProvider";
import { Menu, MenuItem, MenuItemLabel, MenuSeparator } from "@/components/ui/menu";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { HStack } from "@/components/ui/hstack";
import { Pressable } from "@/components/ui/pressable";

const themes = [
  { key: "light", icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#fff"><circle cx="12" cy="12" r="5"/></svg>
    ) },
  { key: "dark", icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#fff"><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"/></svg>
    ) },
  { key: "system", icon: (
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#fff"><path d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.95l-.71.71M21 12h-1M4 12H3m16.66 5.66l-.71-.71M4.05 4.05l-.71-.71"/></svg>
    ) },
];

export function ProfileMenu() {
  const { theme, setTheme } = useTheme();

  return (
    <Menu
      placement="bottom right"
      offset={8}
      trigger={({ ...triggerProps }) => (
        <Pressable {...triggerProps} className="w-8 h-8 rounded-full bg-neutral-700 flex items-center justify-center">
          {/* User icon placeholder */}
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="white"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-2.2 3.6-4 8-4s8 1.8 8 4"/></svg>
        </Pressable>
      )}
    >
      {/* User Info Section */}
      <MenuItem key="user-info" textValue="User Info" disabled className="!p-0 !cursor-default hover:bg-transparent active:bg-transparent focus:bg-transparent">
        <Box className="px-5 py-4 min-w-[260px]">
          <HStack className="items-center space-x-3 mb-3">
            <Box className="w-9 h-9 rounded-full bg-neutral-600 flex items-center justify-center">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#bbb"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-2.2 3.6-4 8-4s8 1.8 8 4"/></svg>
            </Box>
            <Box>
              <Text className="text-white font-medium">Guest</Text>
              <Text className="text-xs text-neutral-400">Not logged in</Text>
            </Box>
          </HStack>
          <HStack className="justify-between gap-2">
            <Text className="text-amber-400 font-semibold cursor-pointer px-2 py-1 rounded hover:bg-neutral-800 transition">SIGN UP</Text>
            <Text className="text-amber-400 font-semibold cursor-pointer px-2 py-1 rounded hover:bg-neutral-800 transition">LOG IN</Text>
          </HStack>
        </Box>
      </MenuItem>
      <MenuSeparator />
      {/* Preferences Section */}
      <MenuItem key="theme" textValue="Theme" disabled className="!p-0 !cursor-default hover:bg-transparent active:bg-transparent focus:bg-transparent">
        <Box className="px-5 py-3">
          <Text className="text-xs text-neutral-400 mb-2">PREFERENCES</Text>
          <HStack className="space-x-2 items-center">
            <Text className="text-white">Theme</Text>
            <Box className="flex flex-row space-x-1 ml-2">
              {themes.map((t) => (
                <button
                  key={t.key}
                  className={`w-7 h-7 rounded flex items-center justify-center border transition ${theme === t.key ? "border-amber-400 bg-neutral-700" : "border-neutral-700 bg-neutral-800"}`}
                  aria-label={t.key}
                  onClick={() => setTheme(t.key as any)}
                >
                  {t.icon}
                </button>
              ))}
            </Box>
          </HStack>
        </Box>
      </MenuItem>
      <MenuSeparator />
      <MenuItem key="whatsnew" textValue="What&apos;s new?">
        <MenuItemLabel size="sm">What&apos;s new?</MenuItemLabel>
      </MenuItem>
      <MenuItem key="report" textValue="Report an issue">
        <MenuItemLabel size="sm">Report an issue</MenuItemLabel>
      </MenuItem>
    </Menu>
  );
}

export default ProfileMenu; 