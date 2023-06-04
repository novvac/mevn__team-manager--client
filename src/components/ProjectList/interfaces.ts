export interface ProjectI {
  name: string;
  icon: string;
  flags?: {
    favorite?: boolean;
    archive?: boolean;
  };
  color?: string;
}


export interface ProjectListPropsI {
  items: ProjectI[];
  title?: string;
}
