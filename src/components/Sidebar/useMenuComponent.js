import { useState } from "react";
const useMenuComponent = ({ defaultPath = "" } = {}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({
    path: defaultPath,
  });

  const isActive = (path, exact) =>
    selectedItem.path === path ||
    (!exact && selectedItem.path.indexOf(`${path}/`) === 0);

  const onMenuItemClicked = (path) => {
    const newItem = {
      path,
    };

    if (isActive(path)) {
      newItem.path = selectedItem.path;
      return setSelectedItem((prevValue) => ({
        ...prevValue,
      }));
    }

    return setSelectedItem(newItem);
  };

  return {
    isOpen,
    setIsOpen,
    isActive,
    onMenuItemClicked,
  };
};

export default useMenuComponent;
