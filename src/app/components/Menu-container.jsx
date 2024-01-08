import MenuItem from "./menu-item";

const MenuContainer = () => {
  const menuItemCollection = [
    {
      mode: "Single Player",
      url: "/single-player",
    },
    {
      mode: "Player vs Player",
      url: "/Player-vs-player",
    },
    {
      mode: "Rules",
      url: "/Rules",
    },
  ];

  return (
    <div className="max-w-7xl m-auto py-10 px-20 flex flex-col gap-32">
      <div>
        <h1 className="font-bold text-3xl text-white">MENU</h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-20">
        {menuItemCollection.map((menu, index) => (
          <div key={index}>
            <MenuItem item={menu.mode} url={menu.url} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuContainer;
