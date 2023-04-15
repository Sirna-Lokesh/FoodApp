import { render } from "@testing-library/react"

import ShimmerBody from "../ShimmerBody"



test("Shimmer body should contain 15 children " , () => {
    const shimmerBody = render(
        <ShimmerBody/>
    )
    const shimmerContainer = shimmerBody.getByTestId("shimmer-container");

    expect(shimmerContainer.children.length).toBe(12);
})