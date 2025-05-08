import { IsOptional } from "class-validator";
import { IsPositive } from "class-validator";
import { IsNumber } from "class-validator";
import { Min } from "class-validator";

export class PaginationDto {
    @IsOptional()
    @IsPositive()
    @IsNumber()
    @Min(1)
    limit?: number;

    @IsOptional()
    @IsPositive()
    offset?: number;
}

