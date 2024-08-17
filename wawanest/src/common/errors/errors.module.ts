import { Module } from '@nestjs/common';
import { ErrorsCapture } from './errors.service';

@Module({
    providers: [ErrorsCapture],
    exports: [ErrorsCapture],
})
export class ErrorModule {}