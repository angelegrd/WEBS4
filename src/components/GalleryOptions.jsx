export default function GalleryOptions({
    search,
    flowersSortBy,
    onSearchChange,
    onFlowersSortByChange,
}) {
    return (<div id="gallery-options">
        <input
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search a flower"
        />
        <label htmlFor="flower-sort">Sort by : </label>
        <select
            id="flower-sort"
            value={flowersSortBy}
            onChange={(e) => onFlowersSortByChange(e.target.value)}
        >
            <option value="height_cm">Height</option>
            <option value="name">Name</option>
        </select>
    </div>
    );
};