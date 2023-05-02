import { PlanetProps } from 'types/planets.type';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface WishlistProps {
  wishlists: PlanetProps[];
  addWishlist: (wishlist: PlanetProps) => void;
  removeWishlist: (planetName: string) => void;
}

export const WishlistStore = create(
  persist<WishlistProps>(
    (set, get) => ({
      wishlists: [],
      addWishlist: (wishlist) =>
        set((state) => {
          return { ...state, wishlists: [...state.wishlists, wishlist] };
        }),
      removeWishlist: (planetName) =>
        set((state) => {
          return {
            ...state,
            wishlists: state.wishlists.filter((e) => e.name != planetName)
          };
        })
    }),
    {
      name: 'wishlist'
    }
  )
);
