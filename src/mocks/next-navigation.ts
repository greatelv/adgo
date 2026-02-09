export const useRouter = () => ({
  push: (url: string) => console.log("Route pushed:", url),
  replace: (url: string) => console.log("Route replaced:", url),
  prefetch: () => {},
  back: () => {},
});

export const usePathname = () => "/";

export const useSearchParams = () => new URLSearchParams();

export const useParams = () => ({});

export const ServerInsertedHTMLContext = {
  Provider: ({ children }: any) => children,
};
