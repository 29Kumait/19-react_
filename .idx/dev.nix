idx.previews = {
  enable = true;
  previews = [
    # The following object sets web previews
    {
      command = [
        "npm"
        "run"
        "start"
        "--"
        "--port"
        "$PORT"
        "--host"
        "0.0.0.0"
        "--disable-host-check"
      ];
      id = "web";
      manager = "web";
    }
    # The following object sets Android previews
    # Note that this is supported only on FLutter workspaces

    {
      id = "android";
      manager = "flutter";
    }
  ];
};

